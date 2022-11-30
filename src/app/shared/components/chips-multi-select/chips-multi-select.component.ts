import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild, AfterViewInit, OnDestroy, Input, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatChip, MatChipInputEvent, MatChipList } from '@angular/material/chips';
import { merge, Observable, ReplaySubject } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { map, scan, shareReplay, takeUntil } from 'rxjs/operators'

@Component({
  selector: 'app-chips-multi-select',
  templateUrl: './chips-multi-select.component.html',
  styles: [`
    mat-form-field { width: 100% };
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ChipsMultiSelectComponent,
      multi: true,
    },
  ],
})

export class ChipsMultiSelectComponent implements OnInit, ControlValueAccessor, AfterViewInit, OnDestroy {
  @Input() input: boolean = true;
  @Input('options') options$: Observable<string[]>;
  @Output() valueCahnged = new EventEmitter();
  @ViewChild(MatChipList) chipList!: MatChipList;
  value: string[] = [];
  onChange!: (value: string[]) => void;
  disabled = false;
  separatorKeysCodes = [ENTER, COMMA];
  private onChipAdded$ = new ReplaySubject<Event>();
  public items$: Observable<string[]>

  private readonly destroy$ = new Subject();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.items$ = merge(this.loadPosts(), this.onChipAdded$)
      .pipe(
        scan((items, event: Event) => {
          switch (event.type) {
            case 'loaded':
              return event.items;
            case 'added':
              return [...items, event.item];
          }
        }, [] as string[]),
        shareReplay(1),
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadPosts() {
    return this.options$.pipe(
      map(items => ({ type: 'loaded', items }) as LoadedEvent)
    );
  }

  ngAfterViewInit(): void {
    this.selectChips(this.value);

    this.chipList.chipSelectionChanges
    .pipe(
      takeUntil(this.destroy$),
      map((event) => event.source))
    .subscribe((chip) => {
      if (chip.selected) {
        this.value = [...this.value, chip.value];
      } else {
        this.value = this.value.filter((o) => o !== chip.value);
      }

      this.propagateChange(this.value);
    });
  }

  toggleSelection(chip: MatChip) {
    if (!this.disabled) chip.toggleSelected(true);
  }

  writeValue(value: string[]): void {
    if (this.chipList && value) {
      this.selectChips(value);
    } else if (value) {
      this.value = value;
    }
  }

  private selectChips(value: string[]) {
    this.chipList.chips.forEach((chip) => chip.deselect());

    const chipsToSelect = this.chipList.chips.filter((c) =>
      value.includes(c.value)
    );

    chipsToSelect.forEach((chip) => chip.select());
    this.cdr.detectChanges();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  propagateChange(value: string[]) {
    if (this.onChange) {
      this.onChange(value);
      this.valueCahnged.next(value);
    }
  }

  addChip(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    if ((value || '').trim()) {
      this.value.push(value.trim());
      this.onChipAdded$.next({ type: 'added', item: value.trim() })
    }

    if (input) {
      input.value = '';
    }
  }
}

type Event = LoadedEvent | AddedEvent;

interface AddedEvent {
    type: 'added';
    item: string;
}

interface LoadedEvent {
    type: 'loaded';
    items: string[];
}
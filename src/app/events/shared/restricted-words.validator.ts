import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function restrictedWords(words: string[]): ValidatorFn {
    if (words == null) {
        return (_: AbstractControl) => null;
    }

    return (control: AbstractControl): ValidationErrors | null => {
        let invalidWords: string[] = words
            .filter(word => control.value.includes(word));

        return invalidWords.length > 0 ?
            {'restrictedWords': invalidWords.join(', ')} :
            null;
    };
}

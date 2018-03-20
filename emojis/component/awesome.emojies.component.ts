import * as EmojiIcons from './../emojies';
import { EmojiModel, EmojiesContainer } from './../Emoji.Model';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'app-awesome-emojis',
    templateUrl: './awesome-emojies.html',
    styleUrls: ['awesome-emojies.scss']
})
export class AwesomeEmojiesComponent implements OnInit {

    @Output() emojiClicked: EventEmitter<EmojiModel> = new EventEmitter();

    emojies: EmojiesContainer[] = [];

    ngOnInit(): void {
        this.emojies = Object.values(EmojiIcons);
    }

    emojiSelected(model: EmojiModel): void {
        this.emojiClicked.emit(model);
    }

}

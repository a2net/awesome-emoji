import * as EmojiIcons from "./../emojies";
import { EmojiModel, EmojiesContainer } from './../Emoji.Model';
import { Component, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
    selector: "awesome-emojies",
    templateUrl: './awesome-emojies.html'
})
export class AwesomeEmojies implements OnInit {

    @Output() emojiClicked: EventEmitter<EmojiModel> = new EventEmitter();

    emojies: EmojiesContainer[] = [];

    ngOnInit(): void {
        this.emojies = Object.keys(EmojiIcons).map(emojiSection => EmojiIcons[emojiSection]);
    }

    emojiSelected(model: EmojiModel): void {
        this.emojiClicked.emit(model);
    }

}
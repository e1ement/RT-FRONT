import {Component, OnInit} from '@angular/core';
import {TasksComponent} from '../tasks/tasks.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ngx-dailies',
  templateUrl: '../tasks/tasks.component.html',
  styleUrls: ['../tasks/tasks.component.scss'],
})
export class DailiesComponent extends TasksComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) {
    super(_activatedRoute);
  }

  ngOnInit(): void {
    this.user = this._activatedRoute.parent.snapshot.data.user;
    this.tasks = [
      {
        'taskId': 3,
        'titleRu': 'Перепутанные буквы',
        'titleEn': 'Mixed up letters',
        'descriptionRu': 'Расставьте Буквы в словах по теме Спорт в логическом порядке.',
        'descriptionEn': 'Put the letters in the words on the topic Sport in a logical order.',
        'text': 'rocsaebi',
        'dialog': [
          {'isUserMessage': true, 'message': 'Hello', 'id': 218}, {
            'isUserMessage': false,
            'message': 'Hi, I\'m John. How do you plan to spend your vacation?',
            'id': 219,
          }, {'isUserMessage': true, 'message': 'Leave me', 'id': 220}, {
            'isUserMessage': false,
            'message': 'I didn\'t understand. You can try rephrasing.',
            'id': 221,
          }, {'isUserMessage': true, 'message': 'Evening', 'id': 222}, {
            'isUserMessage': false,
            'message': 'Can you reword your statement? I\'m not understanding.',
            'id': 223,
          }, {'isUserMessage': true, 'message': 'Hello', 'id': 224}, {
            'isUserMessage': false,
            'message': 'Hi, I\'m John. How do you plan to spend your vacation?',
            'id': 225,
          }, {'isUserMessage': true, 'message': 'Location', 'id': 226}, {
            'isUserMessage': false,
            'message': 'I didn\'t understand. You can try rephrasing.',
            'id': 227,
          }, {'isUserMessage': true, 'message': 'You look me up at Bien', 'id': 228}, {
            'isUserMessage': false,
            'message': 'Can you reword your statement? I\'m not understanding.',
            'id': 229,
          }],
        'fileName': null,
        'rating': 0,
        'aiRecommendation': 'Проанализировав наш разговор я пришел к выводу, что тебе нужно поработать с произношением гласных в открытом слоге, я подготовлю тебе задания на эту тему.',
        'tutorRecommendation': null,
        'isCompleted': true,
      },
      {
        'taskId': 1,
        'titleRu': 'Отгадай кто это?',
        'titleEn': 'Guess who it is?',
        'descriptionRu': 'Произнеси слово, которое загадано',
        'descriptionEn': 'Say the word that is hidden',
        'text': 'Windsurfing',
        'dialog': [],
        'fileName': null,
        'rating': 0,
        'aiRecommendation': null,
        'tutorRecommendation': null,
        'isCompleted': false,
      },
      {
        'taskId': 6,
        'titleRu': 'Перепутанные слова',
        'titleEn': 'Mixed up words',
        'descriptionRu': 'Поставьте слова в логическом порядке.',
        'descriptionEn': 'Put the words in the logical order. ',
        'text': 'body sound a sound in mind a',
        'dialog': [],
        'fileName': null,
        'rating': 0,
        'aiRecommendation': null,
        'tutorRecommendation': null,
        'isCompleted': false,
      },
    ];
  }

}

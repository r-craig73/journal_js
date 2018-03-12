import { Entry } from './entry';
import './styles.css';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var entry = new Entry(title, body);
    $('#entries').append('Text: ' + entry.body());
    $('#entries').append('Number of words: ' + entry.numOfWords());
    $('#entries').append('Number of vowels: ' + entry.numOfWords());
    $('#entries').append('Number of Consonants: ' + entry.numOfConsonants());
    $('#entries').append('Preview: ' + entry.getTeaser());
    $('#entries').append('   ');
    // console.log(entry.numOfWords());
    // console.log(entry.numOfVowels());
    // console.log(entry.numOfConsonants());
    // console.log(entry.getTeaser());
  });
});

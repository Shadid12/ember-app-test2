import { test } from 'qunit';
import moduleForAcceptance from 'my-app/tests/helpers/module-for-acceptance';
const { $ } = Ember;

moduleForAcceptance('Acceptance | email invites');

test('visiting / and bad input should return error message', function(assert) {
  visit('/main');

  fillIn('input', 'shadid');
  click('button');

  andThen(function() {
    let errorResponse = $('.error-main').text();
    assert.equal(errorResponse, 'Email Not Valid');
  });

});
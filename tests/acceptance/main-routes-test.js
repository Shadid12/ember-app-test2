import { test } from 'qunit';
import moduleForAcceptance from 'my-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | main routes');

test('visiting /main', function(assert) {
  visit('/main');

  andThen(function() {
    assert.equal(currentURL(), '/main');
  });
});

test('visiting / should redirect to /main', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/main');
  });
});

test('visiting /about direct to about page', function(assert) {
  visit('/about');

  andThen(function() {
    assert.equal(currentURL(), '/about');
  });
});

test('when user selects About in the nav it takes to about page', function(assert) {
  visit('/');
  click('a:contains("About")');
  andThen(function() {
    assert.equal(currentURL(), '/about');
  });
});

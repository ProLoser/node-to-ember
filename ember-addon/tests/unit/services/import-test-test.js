import { moduleFor, test } from 'ember-qunit';
import emberAddon from 'ember-addon';

moduleFor('service:import-test', 'Unit | Service | import test', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});

test('it has core-library', function(assert){
  console.log(emberAddon);
  assert.ok(emberAddon);
})

import Component from '@glimmer/component';
import { Changeset } from 'ember-changeset';

function validate() {
  return 'not good';
}

export default class ExampleComponent extends Component {
  get model() {
    let cs = Changeset({}, null, { title: validate });
    cs.validate();
    return cs;
  }
}

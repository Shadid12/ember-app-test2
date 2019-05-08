import Controller from '@ember/controller';
import { computed, observer } from '@ember/object';

export default Controller.extend({
    emailAddress: '',
    responseMessage: '',

    isDisabled: computed('emailAddress', function(){
        return this.emailAddress === '';
    }),

    actualEmailAddress: computed('emmailAddress', function() {
        console.log('actual email', this.get('emailAddress'));
    }),
    
    emailAddressChanged: observer('emailAddress', function() {
        console.log('observer changing', this.get('emailAddress'));
    }),
    
    actions: {

        saveInvitation() {
          alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
          this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
          this.set('emailAddress', '');
        }

    }
})

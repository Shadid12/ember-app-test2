import Controller from '@ember/controller';
import { computed, observer } from '@ember/object';

export default Controller.extend({
    emailAddress: '',
    responseMessage: '',
    isValid: computed('emailAddress', function() {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let email = this.get('emailAddress');
        return re.test(email);
    }),

    isDisabled: computed('emailAddress', function(){
        return this.emailAddress === '';
    }),

    actualEmailAddress: computed('emmailAddress', function() {
        // console.log('actual email', this.get('emailAddress'));
    }),
    
    emailAddressChanged: observer('emailAddress', function() {
        // console.log('observer changing', this.get('emailAddress'));
    }),
    
    actions: {
        saveInvitation() {
          if(this.get('isValid')) {
            alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
            this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
            this.set('emailAddress', '');
          }
        }
    }
})

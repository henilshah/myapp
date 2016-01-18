import Ember from 'ember';

export default Ember.Component.extend({
	isImgShow: false,
	actions: {
		ImageShow() {
			this.set('isImgShow',true);
		},
		ImageHide() {
			this.set('isImgShow',false);
		}
	}
});

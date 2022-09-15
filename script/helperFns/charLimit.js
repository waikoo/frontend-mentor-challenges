export default function charLimit() {
	this.value = this.value.slice(0, this.dataset.maxlength);
}

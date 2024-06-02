const stripe = Stripe('pk_test_51PMqvcAC6MZyAJYhKFow17o3Aw5LeBDTtClrhQ2UI86ylCzFjD126LORAu74TXwgcqRuc8YpyaHsnWT37thWcYNL00guHtbl7o');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
	stripe.redirectToCheckout({
		sessionId
	})
});
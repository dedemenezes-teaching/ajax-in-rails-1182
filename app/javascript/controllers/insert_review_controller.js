import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="insert-review"
export default class extends Controller {
  static targets = ['reviews', 'form']
  static values = {
    pokemon: String
  }

  createReview(event) {
    event.preventDefault()
    console.log(new FormData(this.formTarget));
    fetch(this.formTarget.action, {
      method: "POST",
      headers: { 'Accept': 'application/json' },
      body: new FormData(this.formTarget)
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        //=> {review: '<p>Thank you a lot of typos</p>\n'}
        if (data.review) {
          this.reviewsTarget.insertAdjacentHTML(this.pokemonValue, data.review)
        }
        this.formTarget.outerHTML = data.form
      })

  }
}

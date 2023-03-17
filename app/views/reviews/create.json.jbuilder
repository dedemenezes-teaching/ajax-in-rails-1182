if @review.id.present?
  json.review render(partial: 'restaurants/review', locals: { review: @review }, formats: :html)
  json.form render(partial: 'reviews/form', locals: { review: Review.new, restaurant: @restaurant}, formats: :html)
else
  json.form render(partial: 'reviews/form', locals: { review: @review, restaurant: @restaurant}, formats: :html)
end

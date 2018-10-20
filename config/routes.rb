Rails.application.routes.draw do
  get 'goals/index'
	root to: 'transactions#index'

	authenticate :user do
		resources :statements, only: %i[new create]

		namespace :transactions do
			get '/',                             action: :index
      get '/statement/:id',                action: :statement
			get '/:year/:month',                 action: :month
			get '/:year/:month/fuzzy/',          action: :search
			get '/:year/:month/groupby/:group',  action: :groupby
      patch '/category/:id/:category',     action: :set_category
		end

    resources :goals, only: %i[index]
	end
	
  devise_for :users
end

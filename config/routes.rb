Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'users/sessions' }

  get '/error', to: 'root#error'

  root to: 'root#show'
  get '*path', to: 'root#show', constraints: lambda { |req| req.format == :html }
end

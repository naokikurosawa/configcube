# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.1'

# Flexible authentication solution for Rails
gem 'devise'
gem 'devise-i18n'
# Decorators/View-Models for Rails Applications
gem 'draper'
# Enumerated attributes with I18n
gem 'enumerize'
# Substitute for Active Record Observer on Rails 5
gem 'everett'
# Aggregated settings
gem 'global'
# Taming Rails' Default Request Logging
gem 'lograge'
# Use mysql as the database for Active Record
gem 'mysql2', '>= 0.4.4', '< 0.6.0'
# Use Puma as the app server
gem 'puma', '~> 3.12'
# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.2.2'
gem 'rails-i18n', '~> 5.1'
# Seed loader from yml
gem 'simple_seed'
# Slim template engine
gem 'slim-rails'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.1.0', require: false

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: %i[mri mingw x64_mingw]

  # Loading environment variables from `.env`
  gem 'dotenv-rails', require: 'dotenv/rails-now'

  # rspec
  gem 'factory_bot_rails'
  gem 'faker'
  gem 'rspec-rails', '~> 3.8'

  # rubocop
  gem 'rubocop', '~> 0.73.0', require: false
  gem 'rubocop-rails'
end

group :development do
  # Annotate Rails classes with schema and routes info
  gem 'annotate'

  # Better error page for Rack apps
  gem 'better_errors'
  gem 'binding_of_caller'

  # A static analysis security vulnerability scanner
  gem 'brakeman', require: false

  # Patch-level verification for Bundler
  gem 'bundler-audit'

  # Guard watches files and runs a command after a file is modified
  gem 'guard'
  # Guard rspec integration
  gem 'guard-rspec', require: false
  # Guard rubocop integration
  gem 'guard-rubocop', require: false
  # Notify desktop from guard
  gem 'terminal-notifier-guard'

  # The Listen gem listens to file modifications and notifies you about the changes
  gem 'listen', '>= 3.0.5', '< 3.2'

  # Pry
  gem 'pry-byebug'
  gem 'pry-doc'
  gem 'pry-rails'
  gem 'pry-stack_explorer'

  # Spring speeds up development by keeping your application running in the background.
  gem 'spring'
  gem 'spring-commands-rspec'
  gem 'spring-commands-rubocop'
  gem 'spring-watcher-listen', '~> 2.0.0'

  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 3.3.0'
end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
# gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

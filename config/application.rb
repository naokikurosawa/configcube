# frozen_string_literal: true

require_relative 'boot'

require 'rails'
# Pick the frameworks you want:
require 'active_model/railtie'
require 'active_job/railtie'
require 'active_record/railtie'
# require "active_storage/engine"
require 'action_controller/railtie'
require 'action_mailer/railtie'
require 'action_view/railtie'
require 'action_cable/engine'
require 'sprockets/railtie'
require 'rails/test_unit/railtie'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Configcube; end

class Configcube::Application < Rails::Application
  # Initialize configuration defaults for originally generated Rails version.
  config.load_defaults 5.2

  # Settings in config/environments/* take precedence over those specified here.
  # Application configuration can go into files in config/initializers
  # -- all .rb files in that directory are automatically loaded after loading
  # the framework and any gems in your application.

  config.paths.add 'lib/classes', eager_load: true

  ActiveRecord::Base.record_timestamps = false

  config.active_record.default_timezone = :local
  config.time_zone = 'Tokyo'

  config.i18n.default_locale = :ja
  config.i18n.fallbacks = [:en]

  config.generators do |g|
    g.helper_specs false
    g.routing_specs false
    g.view_specs false
    g.controller_specs false
    g.request_specs false

    g.decorator false
    g.factory_bot false
    g.helper false
    g.javascripts false
    g.jbuilder false
    g.stylesheets false
    g.system_tests = nil
  end
end

# Rails bug patch
# rubocop:disable Rails/ApplicationRecord
class ActiveRecord::InternalMetadata < ActiveRecord::Base
  def self.create_table
    return if table_exists?
    key_options = connection.internal_string_options_for_primary_key
    connection.create_table(table_name, id: false) do |t|
      t.string :key, key_options
      t.string :value
    end
  end
end
# rubocop:enable Rails/ApplicationRecord

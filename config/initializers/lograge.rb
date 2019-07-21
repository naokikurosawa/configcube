# frozen_string_literal: true

Rails.application.configure do
  config.lograge.enabled = true

  config.lograge.ignore_actions = ['ElbHealthCheckController#show']
  config.lograge.custom_options = lambda do |event|
    exceptions = %w[controller action format authenticity_token]
    data = {
      user_id: event.payload[:user_id],
      user_name: event.payload[:user_name],
      ip: event.payload[:ip],
      referer: event.payload[:referer],
      user_agent: event.payload[:user_agent],
      time: Time.current,
      params: event.payload[:params].except(*exceptions),
      server_name: ENV['WEB_SERVER_NAME']
    }.compact
    if event.payload[:exception]
      data[:exception] = event.payload[:exception]
      data[:exception_backtrace] = event.payload[:exception_object].backtrace[0..6]
    end
    data
  end
end

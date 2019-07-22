# frozen_string_literal: true

Everett.configure do |config|
  # Activate observers that should always be running.
  config.observers = %w[timestamp_recorder]
end

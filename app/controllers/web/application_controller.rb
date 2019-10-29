class Web::ApplicationController < ApplicationController
  include Concerns::AuthHelper
  helper_method :current_use
end

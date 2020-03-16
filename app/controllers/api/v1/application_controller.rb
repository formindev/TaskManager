class Api::V1::ApplicationController < Api::ApplicationController
  include AuthHelper

  respond_to :json

  def build_meta(collection, paging = true)
    if paging
      {
        count: collection.count,
        total_count: collection.total_count,
        current_page: collection.current_page,
        total_pages: collection.total_pages,
        per_page: collection.limit_value

      }
    else
      {
        count: collection.count
      }
    end
  end
end

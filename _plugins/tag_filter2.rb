module AllTagsFilter2
    include Liquid::StandardFilters
  
    def all_tags_2(pages)
      counts = {}
  
      pages.each do |page|
        page['tags'].each do |tag|
          if counts[tag]
            counts[tag] += 1
          else
            counts[tag] = 1
          end
        end
      end
  
      tags = counts.keys
      tags.reject { |t| t.empty? }
        .map { |tag| { 'name' => tag, 'count' => counts[tag] } }
        .sort { |tag1, tag2| tag2['count'] <=> tag1['count'] }
    end
  end
  
  Liquid::Template.register_filter(AllTagsFilter2)
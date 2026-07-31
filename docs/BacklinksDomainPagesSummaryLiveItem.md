# BacklinksDomainPagesSummaryLiveItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**url** | **string** | *page URL* |[optional]|
**rank** | **number** | *page rank*. rank of the `page`. `rank` is calculated based on the method for node ranking in a linked database - a principle used in the original Google PageRank algorithm. learn more about the metric and how it is calculated in [this help center article](https://dataforseo.com/help-center/what_is_rank_in_backlinks_api) |[optional]|
**backlinks** | **number** | *number of backlinks* |[optional]|
**first_seen** | **string** | *date and time when our crawler found a backlink to this page for the first time*. in the UTC format: 'yyyy-mm-dd hh-mm-ss +00:00'. example:. `2019-11-15 12:57:46 +00:00` |[optional]|
**lost_date** | **string** | *date and time when the last backlink to this page was lost*. indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed. in the UTC format: 'yyyy-mm-dd hh-mm-ss +00:00'. example:. `2017-01-24 13:20:59 +00:00` |[optional]|
**backlinks_spam_score** | **number** | *average spam score of the backlinks pointing to the page*. learn more about how the metric is calculated on [this help center page](https://dataforseo.com/help-center/what-is-spam-score-and-how-is-it-calculated) |[optional]|
**broken_backlinks** | **number** | *number of broken backlinks*. number of broken backlinks pointing to the page |[optional]|
**broken_pages** | **number** | *number of broken pages*. number of pages that respond with 4xx or 5xx status codes where backlinks are pointing to |[optional]|
**referring_domains** | **number** | *indicates the number domains referring to the page* |[optional]|
**referring_domains_nofollow** | **number** | *number of domains pointing at least one nofollow link to the `page`* |[optional]|
**referring_main_domains** | **number** | *indicates the number of referring main domains* |[optional]|
**referring_main_domains_nofollow** | **number** | *number of main domains pointing at least one nofollow link to the `page`* |[optional]|
**referring_ips** | **number** | *number of referring IP addresses*. number of IP addresses pointing to this page |[optional]|
**referring_subnets** | **number** | *number of referring subnetworks* |[optional]|
**referring_pages** | **number** | *indicates the number of pages pointing to the relevant `url`* |[optional]|
**referring_pages_nofollow** | **number** | *number of referring pages pointing at least one nofollow link to the `page`* |[optional]|
**referring_links_tld** | **{ [key: string]: number; }** | *top-level domains of the referring links*. contains top level domains and referring link count per each |[optional]|
**referring_links_types** | **{ [key: string]: number; }** | *types of referring links*. indicates the types of the referring links and link count per each type. possible values:. `anchor`, `image`, `link`, `meta`, `canonical`, `alternate`, `redirect` |[optional]|
**referring_links_attributes** | **{ [key: string]: number; }** | *link attributes of the referring links*. indicates link attributes of the referring links and link count per each attribute |[optional]|
**referring_links_platform_types** | **{ [key: string]: number; }** | *types of referring platforms*. indicates referring platform types and and link count per each platform. possible values: `cms`, `blogs`, `ecommerce`, `message-boards`, `wikis`, `news`, `organization` |[optional]|
**referring_links_semantic_locations** | **{ [key: string]: number; }** | *semantic locations of the referring links*. indicates semantic elements in HTML where the referring links are located and link count per each semantic location. you can get the full list of semantic elements [here](https://www.w3schools.com/html/html5_semantic_elements.asp). examples:. `article`, `section`, `footer` |[optional]|
**referring_links_countries** | **{ [key: string]: number; }** | *ISO country codes of the referring links*. indicates ISO country codes of the domains where the referring links are located and the link count per each country |[optional]|
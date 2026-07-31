# ContentAnalysisSummaryInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**total_count** | **number** | *total amount of results in our database relevant to your request* |[optional]|
**rank** | **number** | *rank of all URLs citing the `keyword`*. normalized sum of ranks of all URLs citing the target `keyword` |[optional]|
**top_domains** | **TopDomainInfo[]** | *top domains citing the target keyword*. contains objects with top domains citing the target keword and citation count per each domain |[optional]|
**sentiment_connotations** | **{ [key: string]: number; }** | *sentiment connotations*. contains sentiments (emotional reactions) related to the target keyword citation and the number of citations per each sentiment. possible sentiment connotations: `anger`, `happiness`, `love`, `sadness`, `share`, `fun` |[optional]|
**connotation_types** | **{ [key: string]: number; }** | *connotation types*. contains types of sentiments (sentiment polarity) related to the keyword citation and citation count per each sentiment type. possible sentiment connotation types: `positive`, `negative`, `neutral` |[optional]|
**text_categories** | **ContentAnalysisCategoriesInfo[]** | *text categories*. contains objects with text categories and citation count in each text category. to obtain a full list of available categories, refer to the [Categories](/v3/content_analysis/categories/) endpoint |[optional]|
**page_categories** | **ContentAnalysisCategoriesInfo[]** | *page categories*. contains objects with page categories and citation count in each page category. to obtain a full list of available categories, refer to the [Categories](/v3/content_analysis/categories/) endpoint |[optional]|
**page_types** | **{ [key: string]: number; }** | *page types*. contains page types and citation count per each page type |[optional]|
**countries** | **{ [key: string]: number; }** | *countries*. contains countries and citation count in each country. to obtain a full list of available countries, refer to the [Locations](/v3/content_analysis/locations/) endpoint |[optional]|
**languages** | **{ [key: string]: number; }** | *languages*. contains languages and citation count in each language. to obtain a full list of available languages, refer to the [Languages](/v3/content_analysis/languages/) endpoint |[optional]|
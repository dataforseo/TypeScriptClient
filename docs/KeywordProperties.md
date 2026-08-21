# KeywordProperties

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**se_type** | **string** | *search engine type* |[optional]|
**core_keyword** | **string** | *main keyword in a group*. contains the main keyword in a group determined by the synonym clustering algorithm. if the value is `null`, our database does not contain any keywords the corresponding algorithm could identify as synonymous with `keyword` |[optional]|
**synonym_clustering_algorithm** | **string** | *the algorithm used to identify synonyms*. possible values:. `keyword_metrics` - indicates the algorithm based on `keyword_info` parameters. `text_processing` - indicates the text-based algorithm. if the value is `null`, our database does not contain any keywords the corresponding algorithm could identify as synonymous with `keyword` |[optional]|
**keyword_difficulty** | **number** | *difficulty of ranking in the first top-10 organic results for a keyword*. indicates the chance of getting in top-10 organic results for a keyword on a logarithmic scale from 0 to 100;. calculated by analysing, among other parameters, link profiles of the first 10 pages in SERP;. learn more about the metric in [this help center guide](https://dataforseo.com/help-center/what-is-keyword-difficulty-and-how-is-it-calculated) |[optional]|
**detected_language** | **string** | *detected language of the keyword*. indicates the language of the keyword as identified by our system |[optional]|
**is_another_language** | **boolean** | *detected language of the keyword is different from the set language*. if `true`, the language set in the request does not match the language determined by our system for a given keyword |[optional]|
**words_count** | **number** | *number of words in the keyword*. indicates how many words the keyword consists of |[optional]|
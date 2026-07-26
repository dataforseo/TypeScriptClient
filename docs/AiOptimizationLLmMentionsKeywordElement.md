# AiOptimizationLLmMentionsKeywordElement

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**keyword** | **string** | target keyword. required field if you don’t specify domain. you can specify up to 2000 characters in the keyword field. all %## will be decoded (plus character ‘+’ will be decoded to a space character). if you need to use the “%” character for your keyword, please specify it as “%25”;. if you need to use the “+” character for your keyword, please specify it as “%2B”. learn more about rules and limitations of keyword and keywords fields in |[optional]|
**match_type** | **string** | target keyword match type. defines how the specified keyword is matched. optional field. possible values:. word_match – full-text search for terms that match the specified seed keyword with additional words included before, after, or within the key phrase (e.g., search for “light” will return results with “light bulb”, “light switch”);. partial_match – substring search that finds all instances containing the specified sequence of characters, even if it appears inside a longer word (e.g., search for “light” will return results with “lighting”, “highlight”);. default value: word_match |[optional]|
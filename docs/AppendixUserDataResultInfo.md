# AppendixUserDataResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**login** | **string** | *your login* |[optional]|
**timezone** | **string** | *your time zone*. **can be set in your profile settings** |[optional]|
**rates** | **AppendixRatesData** | *your API rates* |[optional]|
**money** | **AppendixMoneyData** | *section of your spending, USD* |[optional]|
**price** | **AppendixPriceData** | *pricing* |[optional]|
**backlinks_subscription_expiry_date** | **string** | *expiry date of the backlinks api subscription*. date and time when the current subscription to Backlinks API expires;. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. `2025-06-15 12:57:46 +00:00`. **Note:** if there is no active subscription to Backlinks API, the value equals `null` |[optional]|
**llm_mentions_subscription_expiry_date** | **string** | *expiry date of the llm mentions api subscription*. date and time when the current subscription to LLM Mentions API expires;. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. `2026-02-28 14:01:38 +00:00`. **Note:** if there is no active subscription to LLM Mentions API, the value equals `null` |[optional]|
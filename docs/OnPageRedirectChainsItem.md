# OnPageRedirectChainsItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**is_redirect_loop** | **boolean** | *indicates if redirects in `chain` start and end at the same URL*. if `true`, the last URL from the chain redirects back to the original URL |[optional]|
**chain** | **OnPageRedirectLinkItem[]** | *contains links that form a chain* |[optional]|
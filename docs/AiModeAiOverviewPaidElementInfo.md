# AiModeAiOverviewPaidElementInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**title** | **string** | *title of the element in SERP* |[optional]|
**url** | **string** | *reference page URL* |[optional]|
**domain** | **string** | *domain name of the reference* |[optional]|
**ad_aclk** | **string** | *unique ad click referral parameter*. using this parameter you can get a URL of the advertisement in [Google Shopping Sellers Ad URL](https://docs.dataforseo.com/v3/merchant/google/sellers/ad_url/) |[optional]|
**website_name** | **string** | *displayed name of the advertiser's website* |[optional]|
**breadcrumb** | **string** | *breadcrumb path displayed in the ad* |[optional]|
**snippet** | **string** | *description text of the ad* |[optional]|
**images** | **AiModeImagesElementInfo[]** | *images present in the ad*. if there are none, equals `null` |[optional]|
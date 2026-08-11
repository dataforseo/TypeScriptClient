# OnPageImageResourceItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**meta** | **ResourceMetaInfo** | *page properties*. the value depends on the `resource_type` |[optional]|
**fetch_timing** | **FetchTiming** | *time range within which a result was fetched* |[optional]|
**accept_type** | **string** | *indicates the expected type of resource*. for example, if `'resource_type': 'broken'`, `accept_type` will indicate the type of the broken resource. possible values:. `any`, `none`, `image`, `sitemap`, `robots`, `script`, `stylesheet`, `redirect`, `html`, `text`, `other`, `font` |[optional]|
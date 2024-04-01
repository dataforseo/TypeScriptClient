[Documentation](../README.md) / [Exports](../modules.md) / HtmlResourceElementItem

# Class: HtmlResourceElementItem

## Hierarchy

- [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)

  ↳ **`HtmlResourceElementItem`**

## Implements

- [`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](HtmlResourceElementItem.md#constructor)

### Properties

- [\_discriminator](HtmlResourceElementItem.md#_discriminator)
- [broken\_links](HtmlResourceElementItem.md#broken_links)
- [broken\_resources](HtmlResourceElementItem.md#broken_resources)
- [cache\_control](HtmlResourceElementItem.md#cache_control)
- [checks](HtmlResourceElementItem.md#checks)
- [click\_depth](HtmlResourceElementItem.md#click_depth)
- [content\_encoding](HtmlResourceElementItem.md#content_encoding)
- [custom\_js\_response](HtmlResourceElementItem.md#custom_js_response)
- [duplicate\_content](HtmlResourceElementItem.md#duplicate_content)
- [duplicate\_description](HtmlResourceElementItem.md#duplicate_description)
- [duplicate\_title](HtmlResourceElementItem.md#duplicate_title)
- [encoded\_size](HtmlResourceElementItem.md#encoded_size)
- [fetch\_time](HtmlResourceElementItem.md#fetch_time)
- [is\_resource](HtmlResourceElementItem.md#is_resource)
- [last\_modified](HtmlResourceElementItem.md#last_modified)
- [location](HtmlResourceElementItem.md#location)
- [media\_type](HtmlResourceElementItem.md#media_type)
- [meta](HtmlResourceElementItem.md#meta)
- [onpage\_score](HtmlResourceElementItem.md#onpage_score)
- [page\_timing](HtmlResourceElementItem.md#page_timing)
- [relative\_url\_length](HtmlResourceElementItem.md#relative_url_length)
- [resource\_errors](HtmlResourceElementItem.md#resource_errors)
- [server](HtmlResourceElementItem.md#server)
- [size](HtmlResourceElementItem.md#size)
- [status\_code](HtmlResourceElementItem.md#status_code)
- [total\_dom\_size](HtmlResourceElementItem.md#total_dom_size)
- [total\_transfer\_size](HtmlResourceElementItem.md#total_transfer_size)
- [url](HtmlResourceElementItem.md#url)
- [url\_length](HtmlResourceElementItem.md#url_length)

### Methods

- [init](HtmlResourceElementItem.md#init)
- [toJSON](HtmlResourceElementItem.md#tojson)
- [fromJS](HtmlResourceElementItem.md#fromjs)

## Constructors

### constructor

• **new HtmlResourceElementItem**(`data?`): [`HtmlResourceElementItem`](HtmlResourceElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md) |

#### Returns

[`HtmlResourceElementItem`](HtmlResourceElementItem.md)

#### Overrides

[BaseOnPageResourceItemInfo](BaseOnPageResourceItemInfo.md).[constructor](BaseOnPageResourceItemInfo.md#constructor)

#### Defined in

main.ts:150384

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseOnPageResourceItemInfo](BaseOnPageResourceItemInfo.md).[_discriminator](BaseOnPageResourceItemInfo.md#_discriminator)

#### Defined in

main.ts:20635

___

### broken\_links

• `Optional` **broken\_links**: `boolean`

indicates whether a page contains broken links

#### Implementation of

[IHtmlResourceElementItem](../interfaces/IHtmlResourceElementItem.md).[broken_links](../interfaces/IHtmlResourceElementItem.md#broken_links)

#### Defined in

main.ts:150337

___

### broken\_resources

• `Optional` **broken\_resources**: `boolean`

indicates whether a page contains broken resources

#### Implementation of

[IHtmlResourceElementItem](../interfaces/IHtmlResourceElementItem.md).[broken_resources](../interfaces/IHtmlResourceElementItem.md#broken_resources)

#### Defined in

main.ts:150335

___

### cache\_control

• `Optional` **cache\_control**: [`CacheControl`](CacheControl.md)

instructions for caching

#### Implementation of

[IHtmlResourceElementItem](../interfaces/IHtmlResourceElementItem.md).[cache_control](../interfaces/IHtmlResourceElementItem.md#cache_control)

#### Defined in

main.ts:150362

___

### checks

• `Optional` **checks**: `Object`

website checks
on-page check-ups related to the page

#### Index signature

▪ [key: `string`]: `boolean`

#### Implementation of

[IHtmlResourceElementItem](../interfaces/IHtmlResourceElementItem.md).[checks](../interfaces/IHtmlResourceElementItem.md#checks)

#### Defined in

main.ts:150365

___

### click\_depth

• `Optional` **click\_depth**: `number`

number of clicks it takes to get to the page
indicates the number of clicks from the homepage needed before landing at the target page

#### Implementation of

[IHtmlResourceElementItem](../interfaces/IHtmlResourceElementItem.md).[click_depth](../interfaces/IHtmlResourceElementItem.md#click_depth)

#### Defined in

main.ts:150346

___

### content\_encoding

• `Optional` **content\_encoding**: `string`

type of encoding

#### Implementation of

[IHtmlResourceElementItem](../interfaces/IHtmlResourceElementItem.md).[content_encoding](../interfaces/IHtmlResourceElementItem.md#content_encoding)

#### Defined in

main.ts:150367

___

### custom\_js\_response

• `Optional` **custom\_js\_response**: `any`

the result of executing a specified JS script
note that you should specify a custom_js field when setting a task to receive this data and the field type and its value will totally depend on the script you specified;you can also filter the results by this value specifying filters in the following way:
["custom_js_response.url", "like", "pixel"]

#### Implementation of

[IHtmlResourceElementItem](../interfaces/IHtmlResourceElementItem.md).[custom_js_response](../interfaces/IHtmlResourceElementItem.md#custom_js_response)

#### Defined in

main.ts:150331

___

### duplicate\_content

• `Optional` **duplicate\_content**: `boolean`

indicates whether a page has duplicate content

#### Implementation of

[IHtmlResourceElementItem](../interfaces/IHtmlResourceElementItem.md).[duplicate_content](../interfaces/IHtmlResourceElementItem.md#duplicate_content)

#### Defined in

main.ts:150343

___

### duplicate\_description

• `Optional` **duplicate\_description**: `boolean`

indicates whether a page has a duplicate description

#### Implementation of

[IHtmlResourceElementItem](../interfaces/IHtmlResourceElementItem.md).[duplicate_description](../interfaces/IHtmlResourceElementItem.md#duplicate_description)

#### Defined in

main.ts:150341

___

### duplicate\_title

• `Optional` **duplicate\_title**: `boolean`

indicates whether a page has duplicate title tags

#### Implementation of

[IHtmlResourceElementItem](../interfaces/IHtmlResourceElementItem.md).[duplicate_title](../interfaces/IHtmlResourceElementItem.md#duplicate_title)

#### Defined in

main.ts:150339

___

### encoded\_size

• `Optional` **encoded\_size**: `number`

page size after encoding
indicates the size of the encoded page measured in bytes

#### Implementation of

[IHtmlResourceElementItem](../interfaces/IHtmlResourceElementItem.md).[encoded_size](../interfaces/IHtmlResourceElementItem.md#encoded_size)

#### Defined in

main.ts:150352

___

### fetch\_time

• `Optional` **fetch\_time**: `string`

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IHtmlResourceElementItem](../interfaces/IHtmlResourceElementItem.md).[fetch_time](../interfaces/IHtmlResourceElementItem.md#fetch_time)

#### Defined in

main.ts:150360

___

### is\_resource

• `Optional` **is\_resource**: `boolean`

indicates whether a page is a single resource

#### Implementation of

[IHtmlResourceElementItem](../interfaces/IHtmlResourceElementItem.md).[is_resource](../interfaces/IHtmlResourceElementItem.md#is_resource)

#### Defined in

main.ts:150373

___

### last\_modified

• `Optional` **last\_modified**: [`LastModified`](LastModified.md)

contains data on changes related to the resource
if there is no data, the value will be null

#### Implementation of

[IHtmlResourceElementItem](../interfaces/IHtmlResourceElementItem.md).[last_modified](../interfaces/IHtmlResourceElementItem.md#last_modified)

#### Defined in

main.ts:150380

___

### location

• `Optional` **location**: `string`

location header
indicates the URL to redirect a page to

#### Implementation of

[IHtmlResourceElementItem](../interfaces/IHtmlResourceElementItem.md).[location](../interfaces/IHtmlResourceElementItem.md#location)

#### Defined in

main.ts:150313

___

### media\_type

• `Optional` **media\_type**: `string`

types of media used to display a page

#### Implementation of

[IHtmlResourceElementItem](../interfaces/IHtmlResourceElementItem.md).[media_type](../interfaces/IHtmlResourceElementItem.md#media_type)

#### Defined in

main.ts:150369

___

### meta

• `Optional` **meta**: [`PageMetaInfo`](PageMetaInfo.md)

page properties
the value depends on the resource_type

#### Implementation of

[IHtmlResourceElementItem](../interfaces/IHtmlResourceElementItem.md).[meta](../interfaces/IHtmlResourceElementItem.md#meta)

#### Defined in

main.ts:150318

___

### onpage\_score

• `Optional` **onpage\_score**: `number`

shows how page is optimized on a 100-point scale
this field shows how page is optimized considering critical on-page issues and warnings detected;
100 is the highest possible score that means the page does not have any critical on-page issues and important warnings;
learn more about how the metric is calculated in this help center article

#### Implementation of

[IHtmlResourceElementItem](../interfaces/IHtmlResourceElementItem.md).[onpage_score](../interfaces/IHtmlResourceElementItem.md#onpage_score)

#### Defined in

main.ts:150325

___

### page\_timing

• `Optional` **page\_timing**: [`PageTiming`](PageTiming.md)

object of page load metrics

#### Implementation of

[IHtmlResourceElementItem](../interfaces/IHtmlResourceElementItem.md).[page_timing](../interfaces/IHtmlResourceElementItem.md#page_timing)

#### Defined in

main.ts:150320

___

### relative\_url\_length

• `Optional` **relative\_url\_length**: `number`

relative URL length in characters

#### Implementation of

[IHtmlResourceElementItem](../interfaces/IHtmlResourceElementItem.md).[relative_url_length](../interfaces/IHtmlResourceElementItem.md#relative_url_length)

#### Defined in

main.ts:150377

___

### resource\_errors

• `Optional` **resource\_errors**: [`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

resource errors and warnings

#### Implementation of

[IHtmlResourceElementItem](../interfaces/IHtmlResourceElementItem.md).[resource_errors](../interfaces/IHtmlResourceElementItem.md#resource_errors)

#### Defined in

main.ts:150333

___

### server

• `Optional` **server**: `string`

server version

#### Implementation of

[IHtmlResourceElementItem](../interfaces/IHtmlResourceElementItem.md).[server](../interfaces/IHtmlResourceElementItem.md#server)

#### Defined in

main.ts:150371

___

### size

• `Optional` **size**: `number`

resource size
indicates the size of a given page measured in bytes

#### Implementation of

[IHtmlResourceElementItem](../interfaces/IHtmlResourceElementItem.md).[size](../interfaces/IHtmlResourceElementItem.md#size)

#### Defined in

main.ts:150349

___

### status\_code

• `Optional` **status\_code**: `number`

status code of the page

#### Implementation of

[IHtmlResourceElementItem](../interfaces/IHtmlResourceElementItem.md).[status_code](../interfaces/IHtmlResourceElementItem.md#status_code)

#### Defined in

main.ts:150310

___

### total\_dom\_size

• `Optional` **total\_dom\_size**: `number`

total DOM size of a page

#### Implementation of

[IHtmlResourceElementItem](../interfaces/IHtmlResourceElementItem.md).[total_dom_size](../interfaces/IHtmlResourceElementItem.md#total_dom_size)

#### Defined in

main.ts:150327

___

### total\_transfer\_size

• `Optional` **total\_transfer\_size**: `number`

compressed page size
indicates the compressed size of a given page

#### Implementation of

[IHtmlResourceElementItem](../interfaces/IHtmlResourceElementItem.md).[total_transfer_size](../interfaces/IHtmlResourceElementItem.md#total_transfer_size)

#### Defined in

main.ts:150355

___

### url

• `Optional` **url**: `string`

page URL

#### Implementation of

[IHtmlResourceElementItem](../interfaces/IHtmlResourceElementItem.md).[url](../interfaces/IHtmlResourceElementItem.md#url)

#### Defined in

main.ts:150315

___

### url\_length

• `Optional` **url\_length**: `number`

page URL length in characters

#### Implementation of

[IHtmlResourceElementItem](../interfaces/IHtmlResourceElementItem.md).[url_length](../interfaces/IHtmlResourceElementItem.md#url_length)

#### Defined in

main.ts:150375

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseOnPageResourceItemInfo](BaseOnPageResourceItemInfo.md).[init](BaseOnPageResourceItemInfo.md#init)

#### Defined in

main.ts:150389

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseOnPageResourceItemInfo](BaseOnPageResourceItemInfo.md).[toJSON](BaseOnPageResourceItemInfo.md#tojson)

#### Defined in

main.ts:150440

___

### fromJS

▸ **fromJS**(`data`): [`HtmlResourceElementItem`](HtmlResourceElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`HtmlResourceElementItem`](HtmlResourceElementItem.md)

#### Overrides

[BaseOnPageResourceItemInfo](BaseOnPageResourceItemInfo.md).[fromJS](BaseOnPageResourceItemInfo.md#fromjs)

#### Defined in

main.ts:150433

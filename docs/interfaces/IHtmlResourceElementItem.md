[**Documentation**](../README.md)

***

[Documentation](../README.md) / IHtmlResourceElementItem

# Interface: IHtmlResourceElementItem

Defined in: main.ts:166969

## Extends

- [`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### broken\_links?

> `optional` **broken\_links**: `boolean`

Defined in: main.ts:166992

indicates whether a page contains broken links

***

### broken\_resources?

> `optional` **broken\_resources**: `boolean`

Defined in: main.ts:166990

indicates whether a page contains broken resources

***

### cache\_control?

> `optional` **cache\_control**: [`CacheControl`](../classes/CacheControl.md)

Defined in: main.ts:22464

instructions for caching

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`cache_control`](IBaseOnPageResourceItemInfo.md#cache_control)

***

### checks?

> `optional` **checks**: `object`

Defined in: main.ts:22467

website checks
on-page check-ups related to the page

#### Index Signature

\[`key`: `string`\]: `boolean`

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`checks`](IBaseOnPageResourceItemInfo.md#checks)

***

### click\_depth?

> `optional` **click\_depth**: `number`

Defined in: main.ts:167001

number of clicks it takes to get to the page
indicates the number of clicks from the homepage needed before landing at the target page

***

### content\_encoding?

> `optional` **content\_encoding**: `string`

Defined in: main.ts:22469

type of encoding

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`content_encoding`](IBaseOnPageResourceItemInfo.md#content_encoding)

***

### custom\_js\_client\_exception?

> `optional` **custom\_js\_client\_exception**: `string`

Defined in: main.ts:166988

error when executing a custom js
if the error occurred when executing the script you specified in the custom_js field, the error message would be displayed here

***

### custom\_js\_response?

> `optional` **custom\_js\_response**: `any`

Defined in: main.ts:166985

the result of executing a specified JS script
note that you should specify a custom_js field when setting a task to receive this data and the field type and its value will totally depend on the script you specified;you can also filter the results by this value specifying filters in the following way:
["custom_js_response.url", "like", "pixel"]

***

### duplicate\_content?

> `optional` **duplicate\_content**: `boolean`

Defined in: main.ts:166998

indicates whether a page has duplicate content

***

### duplicate\_description?

> `optional` **duplicate\_description**: `boolean`

Defined in: main.ts:166996

indicates whether a page has a duplicate description

***

### duplicate\_title?

> `optional` **duplicate\_title**: `boolean`

Defined in: main.ts:166994

indicates whether a page has duplicate title tags

***

### encoded\_size?

> `optional` **encoded\_size**: `number`

Defined in: main.ts:22454

page size after encoding
indicates the size of the encoded page measured in bytes

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`encoded_size`](IBaseOnPageResourceItemInfo.md#encoded_size)

***

### fetch\_time?

> `optional` **fetch\_time**: `string`

Defined in: main.ts:22462

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`fetch_time`](IBaseOnPageResourceItemInfo.md#fetch_time)

***

### is\_resource?

> `optional` **is\_resource**: `boolean`

Defined in: main.ts:167003

indicates whether a page is a single resource

***

### last\_modified?

> `optional` **last\_modified**: [`LastModified`](../classes/LastModified.md)

Defined in: main.ts:22476

contains data on changes related to the resource
if there is no data, the value will be null

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`last_modified`](IBaseOnPageResourceItemInfo.md#last_modified)

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:22444

location header
indicates the URL to redirect a page to

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`location`](IBaseOnPageResourceItemInfo.md#location)

***

### media\_type?

> `optional` **media\_type**: `string`

Defined in: main.ts:22471

types of media used to display a page

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`media_type`](IBaseOnPageResourceItemInfo.md#media_type)

***

### meta?

> `optional` **meta**: [`PageMetaInfo`](../classes/PageMetaInfo.md)

Defined in: main.ts:166972

page properties
the value depends on the resource_type

***

### onpage\_score?

> `optional` **onpage\_score**: `number`

Defined in: main.ts:166979

shows how page is optimized on a 100-point scale
this field shows how page is optimized considering critical on-page issues and warnings detected;
100 is the highest possible score that means the page does not have any critical on-page issues and important warnings;
learn more about how the metric is calculated in this help center article

***

### page\_timing?

> `optional` **page\_timing**: [`PageTiming`](../classes/PageTiming.md)

Defined in: main.ts:166974

object of page load metrics

***

### relative\_url\_length?

> `optional` **relative\_url\_length**: `number`

Defined in: main.ts:167007

relative URL length in characters

***

### resource\_errors?

> `optional` **resource\_errors**: [`OnPageResourceIssueInfo`](../classes/OnPageResourceIssueInfo.md)

Defined in: main.ts:22448

resource errors and warnings

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`resource_errors`](IBaseOnPageResourceItemInfo.md#resource_errors)

***

### resource\_type?

> `optional` **resource\_type**: `string`

Defined in: main.ts:22439

type of the returned resource

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`resource_type`](IBaseOnPageResourceItemInfo.md#resource_type)

***

### server?

> `optional` **server**: `string`

Defined in: main.ts:22473

server version

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`server`](IBaseOnPageResourceItemInfo.md#server)

***

### size?

> `optional` **size**: `number`

Defined in: main.ts:22451

resource size
indicates the size of a given page measured in bytes

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`size`](IBaseOnPageResourceItemInfo.md#size)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:22441

status code of the page

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`status_code`](IBaseOnPageResourceItemInfo.md#status_code)

***

### total\_dom\_size?

> `optional` **total\_dom\_size**: `number`

Defined in: main.ts:166981

total DOM size of a page

***

### total\_transfer\_size?

> `optional` **total\_transfer\_size**: `number`

Defined in: main.ts:22457

compressed page size
indicates the compressed size of a given page

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`total_transfer_size`](IBaseOnPageResourceItemInfo.md#total_transfer_size)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:22446

page URL

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`url`](IBaseOnPageResourceItemInfo.md#url)

***

### url\_length?

> `optional` **url\_length**: `number`

Defined in: main.ts:167005

page URL length in characters

[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IBrokenResourceElementItem

# Interface: IBrokenResourceElementItem

## Extends

- [`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### accept\_type?

> `optional` **accept\_type**: `string`

indicates the expected type of resource
for example, if "resource_type": "broken", accept_type will indicate the type of the broken resource
possible values:
any, none, image, sitemap, robots, script, stylesheet, redirect, html, text, other, font

#### Defined in

main.ts:156674

***

### cache\_control?

> `optional` **cache\_control**: [`CacheControl`](../classes/CacheControl.md)

instructions for caching

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`cache_control`](IBaseOnPageResourceItemInfo.md#cache_control)

#### Defined in

main.ts:21561

***

### checks?

> `optional` **checks**: `object`

website checks
on-page check-ups related to the page

#### Index Signature

 \[`key`: `string`\]: `boolean`

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`checks`](IBaseOnPageResourceItemInfo.md#checks)

#### Defined in

main.ts:21564

***

### content\_encoding?

> `optional` **content\_encoding**: `string`

type of encoding

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`content_encoding`](IBaseOnPageResourceItemInfo.md#content_encoding)

#### Defined in

main.ts:21566

***

### encoded\_size?

> `optional` **encoded\_size**: `number`

page size after encoding
indicates the size of the encoded page measured in bytes

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`encoded_size`](IBaseOnPageResourceItemInfo.md#encoded_size)

#### Defined in

main.ts:21551

***

### fetch\_time?

> `optional` **fetch\_time**: `string`

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`fetch_time`](IBaseOnPageResourceItemInfo.md#fetch_time)

#### Defined in

main.ts:21559

***

### fetch\_timing?

> `optional` **fetch\_timing**: [`FetchTiming`](../classes/FetchTiming.md)

resource fething time range

#### Defined in

main.ts:156669

***

### last\_modified?

> `optional` **last\_modified**: [`LastModified`](../classes/LastModified.md)

contains data on changes related to the resource
if there is no data, the value will be null

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`last_modified`](IBaseOnPageResourceItemInfo.md#last_modified)

#### Defined in

main.ts:21573

***

### location?

> `optional` **location**: `string`

location header
indicates the URL to redirect a page to

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`location`](IBaseOnPageResourceItemInfo.md#location)

#### Defined in

main.ts:21541

***

### media\_type?

> `optional` **media\_type**: `string`

types of media used to display a page

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`media_type`](IBaseOnPageResourceItemInfo.md#media_type)

#### Defined in

main.ts:21568

***

### meta?

> `optional` **meta**: [`PageMetaInfo`](../classes/PageMetaInfo.md)

resource properties
the value depends on the resource_type
note that if you do not indicate a url when setting a task, resource’s meta is returned based on the data from the page where our crawler first saw the resource;
to obtain resource’s meta from a particular url, specify that URL when setting a task

#### Defined in

main.ts:156667

***

### resource\_errors?

> `optional` **resource\_errors**: [`OnPageResourceIssueInfo`](../classes/OnPageResourceIssueInfo.md)

resource errors and warnings

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`resource_errors`](IBaseOnPageResourceItemInfo.md#resource_errors)

#### Defined in

main.ts:21545

***

### resource\_type?

> `optional` **resource\_type**: `string`

type of the returned resource

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`resource_type`](IBaseOnPageResourceItemInfo.md#resource_type)

#### Defined in

main.ts:21536

***

### server?

> `optional` **server**: `string`

server version

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`server`](IBaseOnPageResourceItemInfo.md#server)

#### Defined in

main.ts:21570

***

### size?

> `optional` **size**: `number`

resource size
indicates the size of a given page measured in bytes

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`size`](IBaseOnPageResourceItemInfo.md#size)

#### Defined in

main.ts:21548

***

### status\_code?

> `optional` **status\_code**: `number`

status code of the page

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`status_code`](IBaseOnPageResourceItemInfo.md#status_code)

#### Defined in

main.ts:21538

***

### total\_transfer\_size?

> `optional` **total\_transfer\_size**: `number`

compressed page size
indicates the compressed size of a given page

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`total_transfer_size`](IBaseOnPageResourceItemInfo.md#total_transfer_size)

#### Defined in

main.ts:21554

***

### url?

> `optional` **url**: `string`

page URL

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`url`](IBaseOnPageResourceItemInfo.md#url)

#### Defined in

main.ts:21543

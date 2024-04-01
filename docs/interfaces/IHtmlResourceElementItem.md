[Documentation](../README.md) / [Exports](../modules.md) / IHtmlResourceElementItem

# Interface: IHtmlResourceElementItem

## Hierarchy

- [`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md)

  ↳ **`IHtmlResourceElementItem`**

## Implemented by

- [`HtmlResourceElementItem`](../classes/HtmlResourceElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [broken\_links](IHtmlResourceElementItem.md#broken_links)
- [broken\_resources](IHtmlResourceElementItem.md#broken_resources)
- [cache\_control](IHtmlResourceElementItem.md#cache_control)
- [checks](IHtmlResourceElementItem.md#checks)
- [click\_depth](IHtmlResourceElementItem.md#click_depth)
- [content\_encoding](IHtmlResourceElementItem.md#content_encoding)
- [custom\_js\_response](IHtmlResourceElementItem.md#custom_js_response)
- [duplicate\_content](IHtmlResourceElementItem.md#duplicate_content)
- [duplicate\_description](IHtmlResourceElementItem.md#duplicate_description)
- [duplicate\_title](IHtmlResourceElementItem.md#duplicate_title)
- [encoded\_size](IHtmlResourceElementItem.md#encoded_size)
- [fetch\_time](IHtmlResourceElementItem.md#fetch_time)
- [is\_resource](IHtmlResourceElementItem.md#is_resource)
- [last\_modified](IHtmlResourceElementItem.md#last_modified)
- [location](IHtmlResourceElementItem.md#location)
- [media\_type](IHtmlResourceElementItem.md#media_type)
- [meta](IHtmlResourceElementItem.md#meta)
- [onpage\_score](IHtmlResourceElementItem.md#onpage_score)
- [page\_timing](IHtmlResourceElementItem.md#page_timing)
- [relative\_url\_length](IHtmlResourceElementItem.md#relative_url_length)
- [resource\_errors](IHtmlResourceElementItem.md#resource_errors)
- [server](IHtmlResourceElementItem.md#server)
- [size](IHtmlResourceElementItem.md#size)
- [status\_code](IHtmlResourceElementItem.md#status_code)
- [total\_dom\_size](IHtmlResourceElementItem.md#total_dom_size)
- [total\_transfer\_size](IHtmlResourceElementItem.md#total_transfer_size)
- [url](IHtmlResourceElementItem.md#url)
- [url\_length](IHtmlResourceElementItem.md#url_length)

## Properties

### broken\_links

• `Optional` **broken\_links**: `boolean`

indicates whether a page contains broken links

#### Defined in

main.ts:150514

___

### broken\_resources

• `Optional` **broken\_resources**: `boolean`

indicates whether a page contains broken resources

#### Defined in

main.ts:150512

___

### cache\_control

• `Optional` **cache\_control**: [`CacheControl`](../classes/CacheControl.md)

instructions for caching

#### Defined in

main.ts:150539

___

### checks

• `Optional` **checks**: `Object`

website checks
on-page check-ups related to the page

#### Index signature

▪ [key: `string`]: `boolean`

#### Defined in

main.ts:150542

___

### click\_depth

• `Optional` **click\_depth**: `number`

number of clicks it takes to get to the page
indicates the number of clicks from the homepage needed before landing at the target page

#### Defined in

main.ts:150523

___

### content\_encoding

• `Optional` **content\_encoding**: `string`

type of encoding

#### Defined in

main.ts:150544

___

### custom\_js\_response

• `Optional` **custom\_js\_response**: `any`

the result of executing a specified JS script
note that you should specify a custom_js field when setting a task to receive this data and the field type and its value will totally depend on the script you specified;you can also filter the results by this value specifying filters in the following way:
["custom_js_response.url", "like", "pixel"]

#### Defined in

main.ts:150508

___

### duplicate\_content

• `Optional` **duplicate\_content**: `boolean`

indicates whether a page has duplicate content

#### Defined in

main.ts:150520

___

### duplicate\_description

• `Optional` **duplicate\_description**: `boolean`

indicates whether a page has a duplicate description

#### Defined in

main.ts:150518

___

### duplicate\_title

• `Optional` **duplicate\_title**: `boolean`

indicates whether a page has duplicate title tags

#### Defined in

main.ts:150516

___

### encoded\_size

• `Optional` **encoded\_size**: `number`

page size after encoding
indicates the size of the encoded page measured in bytes

#### Defined in

main.ts:150529

___

### fetch\_time

• `Optional` **fetch\_time**: `string`

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:150537

___

### is\_resource

• `Optional` **is\_resource**: `boolean`

indicates whether a page is a single resource

#### Defined in

main.ts:150550

___

### last\_modified

• `Optional` **last\_modified**: [`LastModified`](../classes/LastModified.md)

contains data on changes related to the resource
if there is no data, the value will be null

#### Defined in

main.ts:150557

___

### location

• `Optional` **location**: `string`

location header
indicates the URL to redirect a page to

#### Defined in

main.ts:150490

___

### media\_type

• `Optional` **media\_type**: `string`

types of media used to display a page

#### Defined in

main.ts:150546

___

### meta

• `Optional` **meta**: [`PageMetaInfo`](../classes/PageMetaInfo.md)

page properties
the value depends on the resource_type

#### Defined in

main.ts:150495

___

### onpage\_score

• `Optional` **onpage\_score**: `number`

shows how page is optimized on a 100-point scale
this field shows how page is optimized considering critical on-page issues and warnings detected;
100 is the highest possible score that means the page does not have any critical on-page issues and important warnings;
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:150502

___

### page\_timing

• `Optional` **page\_timing**: [`PageTiming`](../classes/PageTiming.md)

object of page load metrics

#### Defined in

main.ts:150497

___

### relative\_url\_length

• `Optional` **relative\_url\_length**: `number`

relative URL length in characters

#### Defined in

main.ts:150554

___

### resource\_errors

• `Optional` **resource\_errors**: [`OnPageResourceIssueInfo`](../classes/OnPageResourceIssueInfo.md)

resource errors and warnings

#### Defined in

main.ts:150510

___

### server

• `Optional` **server**: `string`

server version

#### Defined in

main.ts:150548

___

### size

• `Optional` **size**: `number`

resource size
indicates the size of a given page measured in bytes

#### Defined in

main.ts:150526

___

### status\_code

• `Optional` **status\_code**: `number`

status code of the page

#### Defined in

main.ts:150487

___

### total\_dom\_size

• `Optional` **total\_dom\_size**: `number`

total DOM size of a page

#### Defined in

main.ts:150504

___

### total\_transfer\_size

• `Optional` **total\_transfer\_size**: `number`

compressed page size
indicates the compressed size of a given page

#### Defined in

main.ts:150532

___

### url

• `Optional` **url**: `string`

page URL

#### Defined in

main.ts:150492

___

### url\_length

• `Optional` **url\_length**: `number`

page URL length in characters

#### Defined in

main.ts:150552

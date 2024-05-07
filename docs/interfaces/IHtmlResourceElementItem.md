**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IHtmlResourceElementItem

# Interface: IHtmlResourceElementItem

## Extends

- [`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### broken\_links?

> **`optional`** **broken\_links**: `boolean`

indicates whether a page contains broken links

#### Source

main.ts:152474

***

### broken\_resources?

> **`optional`** **broken\_resources**: `boolean`

indicates whether a page contains broken resources

#### Source

main.ts:152472

***

### cache\_control?

> **`optional`** **cache\_control**: [`CacheControl`](../classes/CacheControl.md)

instructions for caching

#### Source

main.ts:152499

***

### checks?

> **`optional`** **checks**: `Object`

website checks
on-page check-ups related to the page

#### Index signature

 \[`key`: `string`\]: `boolean`

#### Source

main.ts:152502

***

### click\_depth?

> **`optional`** **click\_depth**: `number`

number of clicks it takes to get to the page
indicates the number of clicks from the homepage needed before landing at the target page

#### Source

main.ts:152483

***

### content\_encoding?

> **`optional`** **content\_encoding**: `string`

type of encoding

#### Source

main.ts:152504

***

### custom\_js\_response?

> **`optional`** **custom\_js\_response**: `any`

the result of executing a specified JS script
note that you should specify a custom_js field when setting a task to receive this data and the field type and its value will totally depend on the script you specified;you can also filter the results by this value specifying filters in the following way:
["custom_js_response.url", "like", "pixel"]

#### Source

main.ts:152468

***

### duplicate\_content?

> **`optional`** **duplicate\_content**: `boolean`

indicates whether a page has duplicate content

#### Source

main.ts:152480

***

### duplicate\_description?

> **`optional`** **duplicate\_description**: `boolean`

indicates whether a page has a duplicate description

#### Source

main.ts:152478

***

### duplicate\_title?

> **`optional`** **duplicate\_title**: `boolean`

indicates whether a page has duplicate title tags

#### Source

main.ts:152476

***

### encoded\_size?

> **`optional`** **encoded\_size**: `number`

page size after encoding
indicates the size of the encoded page measured in bytes

#### Source

main.ts:152489

***

### fetch\_time?

> **`optional`** **fetch\_time**: `string`

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:152497

***

### is\_resource?

> **`optional`** **is\_resource**: `boolean`

indicates whether a page is a single resource

#### Source

main.ts:152510

***

### last\_modified?

> **`optional`** **last\_modified**: [`LastModified`](../classes/LastModified.md)

contains data on changes related to the resource
if there is no data, the value will be null

#### Source

main.ts:152517

***

### location?

> **`optional`** **location**: `string`

location header
indicates the URL to redirect a page to

#### Source

main.ts:152450

***

### media\_type?

> **`optional`** **media\_type**: `string`

types of media used to display a page

#### Source

main.ts:152506

***

### meta?

> **`optional`** **meta**: [`PageMetaInfo`](../classes/PageMetaInfo.md)

page properties
the value depends on the resource_type

#### Source

main.ts:152455

***

### onpage\_score?

> **`optional`** **onpage\_score**: `number`

shows how page is optimized on a 100-point scale
this field shows how page is optimized considering critical on-page issues and warnings detected;
100 is the highest possible score that means the page does not have any critical on-page issues and important warnings;
learn more about how the metric is calculated in this help center article

#### Source

main.ts:152462

***

### page\_timing?

> **`optional`** **page\_timing**: [`PageTiming`](../classes/PageTiming.md)

object of page load metrics

#### Source

main.ts:152457

***

### relative\_url\_length?

> **`optional`** **relative\_url\_length**: `number`

relative URL length in characters

#### Source

main.ts:152514

***

### resource\_errors?

> **`optional`** **resource\_errors**: [`OnPageResourceIssueInfo`](../classes/OnPageResourceIssueInfo.md)

resource errors and warnings

#### Source

main.ts:152470

***

### server?

> **`optional`** **server**: `string`

server version

#### Source

main.ts:152508

***

### size?

> **`optional`** **size**: `number`

resource size
indicates the size of a given page measured in bytes

#### Source

main.ts:152486

***

### status\_code?

> **`optional`** **status\_code**: `number`

status code of the page

#### Source

main.ts:152447

***

### total\_dom\_size?

> **`optional`** **total\_dom\_size**: `number`

total DOM size of a page

#### Source

main.ts:152464

***

### total\_transfer\_size?

> **`optional`** **total\_transfer\_size**: `number`

compressed page size
indicates the compressed size of a given page

#### Source

main.ts:152492

***

### url?

> **`optional`** **url**: `string`

page URL

#### Source

main.ts:152452

***

### url\_length?

> **`optional`** **url\_length**: `number`

page URL length in characters

#### Source

main.ts:152512

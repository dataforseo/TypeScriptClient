**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IStylesheetResourceElementItem

# Interface: IStylesheetResourceElementItem

## Extends

- [`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### accept\_type?

> **`optional`** **accept\_type**: `string`

indicates the expected type of resource
for example, if "resource_type": "broken", accept_type will indicate the type of the broken resource
possible values:
any, none, image, sitemap, robots, script, stylesheet, redirect, html, text, other, font

#### Source

main.ts:152804

***

### cache\_control?

> **`optional`** **cache\_control**: [`CacheControl`](../classes/CacheControl.md)

instructions for caching

#### Source

main.ts:152790

***

### checks?

> **`optional`** **checks**: `Object`

resource check-ups
contents of the array depend on the resource_type

#### Index signature

 \[`key`: `string`\]: `boolean`

#### Source

main.ts:152793

***

### content\_encoding?

> **`optional`** **content\_encoding**: `string`

type of encoding

#### Source

main.ts:152797

***

### duration\_time?

> **`optional`** **duration\_time**: `number`

total time it takes until a browser receives a complete response from a server (in milliseconds)

#### Source

main.ts:152813

***

### encoded\_size?

> **`optional`** **encoded\_size**: `number`

resource size after encoding
indicates the size of the encoded resource measured in bytes

#### Source

main.ts:152778

***

### fetch\_end?

> **`optional`** **fetch\_end**: `number`

time to complete downloading the resource
the amount of time the browser needs to complete downloading a resource

#### Source

main.ts:152819

***

### fetch\_start?

> **`optional`** **fetch\_start**: `number`

time to start downloading the resource
the amount of time the browser needs to start downloading a resource

#### Source

main.ts:152816

***

### fetch\_time?

> **`optional`** **fetch\_time**: `string`

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-02-17 13:54:15 +00:00

#### Source

main.ts:152786

***

### fetch\_timing?

> **`optional`** **fetch\_timing**: [`FetchTiming`](../classes/FetchTiming.md)

resource fething time range

#### Source

main.ts:152788

***

### initiator?

> **`optional`** **initiator**: `string`

resource initiator

#### Source

main.ts:152811

***

### is\_render\_blocking?

> **`optional`** **is\_render\_blocking**: `boolean`

indicates whether the resource blocks rendering

#### Source

main.ts:152821

***

### last\_modified?

> **`optional`** **last\_modified**: [`LastModified`](../classes/LastModified.md)

contains data on changes related to the resource
if there is no data, the value will be null

#### Source

main.ts:152809

***

### location?

> **`optional`** **location**: `string`

location header
indicates the URL to redirect a page to

#### Source

main.ts:152770

***

### media\_type?

> **`optional`** **media\_type**: `string`

types of media used to display a resource

#### Source

main.ts:152799

***

### meta?

> **`optional`** **meta**: [`ResourceMetaInfo`](../classes/ResourceMetaInfo.md)

resource properties
the value depends on the resource_type
note that if you do not indicate a url when setting a task, resource’s meta is returned based on the data from the page where our crawler first saw the resource;
to obtain resource’s meta from a particular url, specify that URL when setting a task

#### Source

main.ts:152765

***

### resource\_errors?

> **`optional`** **resource\_errors**: [`OnPageResourceIssueInfo`](../classes/OnPageResourceIssueInfo.md)

resource errors and warnings

#### Source

main.ts:152795

***

### server?

> **`optional`** **server**: `string`

server version

#### Source

main.ts:152806

***

### size?

> **`optional`** **size**: `number`

resource size
indicates the size of a given resource measured in bytes

#### Source

main.ts:152775

***

### status\_code?

> **`optional`** **status\_code**: `number`

status code of the page where a given resource is located

#### Source

main.ts:152767

***

### total\_transfer\_size?

> **`optional`** **total\_transfer\_size**: `number`

compressed resource size
indicates the compressed size of a given resource in bytes

#### Source

main.ts:152781

***

### url?

> **`optional`** **url**: `string`

resource URL

#### Source

main.ts:152772

[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBaseOnPageResourceItemInfo

# Interface: IBaseOnPageResourceItemInfo

Defined in: main.ts:22437

## Extended by

- [`IHtmlResourceElementItem`](IHtmlResourceElementItem.md)
- [`IStylesheetResourceElementItem`](IStylesheetResourceElementItem.md)
- [`IScriptResourceElementItem`](IScriptResourceElementItem.md)
- [`IImageResourceElementItem`](IImageResourceElementItem.md)
- [`IBrokenResourceElementItem`](IBrokenResourceElementItem.md)

## Properties

### cache\_control?

> `optional` **cache\_control**: [`CacheControl`](../classes/CacheControl.md)

Defined in: main.ts:22464

instructions for caching

***

### checks?

> `optional` **checks**: `object`

Defined in: main.ts:22467

website checks
on-page check-ups related to the page

#### Index Signature

\[`key`: `string`\]: `boolean`

***

### content\_encoding?

> `optional` **content\_encoding**: `string`

Defined in: main.ts:22469

type of encoding

***

### encoded\_size?

> `optional` **encoded\_size**: `number`

Defined in: main.ts:22454

page size after encoding
indicates the size of the encoded page measured in bytes

***

### fetch\_time?

> `optional` **fetch\_time**: `string`

Defined in: main.ts:22462

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### last\_modified?

> `optional` **last\_modified**: [`LastModified`](../classes/LastModified.md)

Defined in: main.ts:22476

contains data on changes related to the resource
if there is no data, the value will be null

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:22444

location header
indicates the URL to redirect a page to

***

### media\_type?

> `optional` **media\_type**: `string`

Defined in: main.ts:22471

types of media used to display a page

***

### resource\_errors?

> `optional` **resource\_errors**: [`OnPageResourceIssueInfo`](../classes/OnPageResourceIssueInfo.md)

Defined in: main.ts:22448

resource errors and warnings

***

### resource\_type?

> `optional` **resource\_type**: `string`

Defined in: main.ts:22439

type of the returned resource

***

### server?

> `optional` **server**: `string`

Defined in: main.ts:22473

server version

***

### size?

> `optional` **size**: `number`

Defined in: main.ts:22451

resource size
indicates the size of a given page measured in bytes

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:22441

status code of the page

***

### total\_transfer\_size?

> `optional` **total\_transfer\_size**: `number`

Defined in: main.ts:22457

compressed page size
indicates the compressed size of a given page

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:22446

page URL

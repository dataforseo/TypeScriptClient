[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IBaseOnPageResourceItemInfo

# Interface: IBaseOnPageResourceItemInfo

## Extended by

- [`IHtmlResourceElementItem`](IHtmlResourceElementItem.md)
- [`IStylesheetResourceElementItem`](IStylesheetResourceElementItem.md)
- [`IScriptResourceElementItem`](IScriptResourceElementItem.md)
- [`IImageResourceElementItem`](IImageResourceElementItem.md)
- [`IBrokenResourceElementItem`](IBrokenResourceElementItem.md)

## Properties

### cache\_control?

> `optional` **cache\_control**: [`CacheControl`](../classes/CacheControl.md)

instructions for caching

#### Defined in

main.ts:21566

***

### checks?

> `optional` **checks**: `object`

website checks
on-page check-ups related to the page

#### Index Signature

 \[`key`: `string`\]: `boolean`

#### Defined in

main.ts:21569

***

### content\_encoding?

> `optional` **content\_encoding**: `string`

type of encoding

#### Defined in

main.ts:21571

***

### encoded\_size?

> `optional` **encoded\_size**: `number`

page size after encoding
indicates the size of the encoded page measured in bytes

#### Defined in

main.ts:21556

***

### fetch\_time?

> `optional` **fetch\_time**: `string`

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:21564

***

### last\_modified?

> `optional` **last\_modified**: [`LastModified`](../classes/LastModified.md)

contains data on changes related to the resource
if there is no data, the value will be null

#### Defined in

main.ts:21578

***

### location?

> `optional` **location**: `string`

location header
indicates the URL to redirect a page to

#### Defined in

main.ts:21546

***

### media\_type?

> `optional` **media\_type**: `string`

types of media used to display a page

#### Defined in

main.ts:21573

***

### resource\_errors?

> `optional` **resource\_errors**: [`OnPageResourceIssueInfo`](../classes/OnPageResourceIssueInfo.md)

resource errors and warnings

#### Defined in

main.ts:21550

***

### resource\_type?

> `optional` **resource\_type**: `string`

type of the returned resource

#### Defined in

main.ts:21541

***

### server?

> `optional` **server**: `string`

server version

#### Defined in

main.ts:21575

***

### size?

> `optional` **size**: `number`

resource size
indicates the size of a given page measured in bytes

#### Defined in

main.ts:21553

***

### status\_code?

> `optional` **status\_code**: `number`

status code of the page

#### Defined in

main.ts:21543

***

### total\_transfer\_size?

> `optional` **total\_transfer\_size**: `number`

compressed page size
indicates the compressed size of a given page

#### Defined in

main.ts:21559

***

### url?

> `optional` **url**: `string`

page URL

#### Defined in

main.ts:21548

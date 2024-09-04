[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IScriptResourceElementItem

# Interface: IScriptResourceElementItem

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

main.ts:159999

***

### cache\_control?

> `optional` **cache\_control**: [`CacheControl`](../classes/CacheControl.md)

instructions for caching

#### Defined in

main.ts:159987

***

### checks?

> `optional` **checks**: `object`

resource check-ups
contents of the array depend on the resource_type

#### Index Signature

 \[`key`: `string`\]: `boolean`

#### Defined in

main.ts:159990

***

### content\_encoding?

> `optional` **content\_encoding**: `string`

type of encoding

#### Defined in

main.ts:159992

***

### encoded\_size?

> `optional` **encoded\_size**: `number`

resource size after encoding
indicates the size of the encoded resource measured in bytes

#### Defined in

main.ts:159975

***

### fetch\_time?

> `optional` **fetch\_time**: `string`

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-02-17 13:54:15 +00:00

#### Defined in

main.ts:159983

***

### fetch\_timing?

> `optional` **fetch\_timing**: [`FetchTiming`](../classes/FetchTiming.md)

resource fething time range

#### Defined in

main.ts:159985

***

### last\_modified?

> `optional` **last\_modified**: [`LastModified`](../classes/LastModified.md)

contains data on changes related to the resource
if there is no data, the value will be null

#### Defined in

main.ts:160004

***

### location?

> `optional` **location**: `string`

location header
indicates the URL to redirect a page to

#### Defined in

main.ts:159967

***

### media\_type?

> `optional` **media\_type**: `string`

types of media used to display a resource

#### Defined in

main.ts:159994

***

### meta?

> `optional` **meta**: [`ResourceMetaInfo`](../classes/ResourceMetaInfo.md)

resource properties
the value depends on the resource_type
note that if you do not indicate a url when setting a task, resource’s meta is returned based on the data from the page where our crawler first saw the resource;
to obtain resource’s meta from a particular url, specify that URL when setting a task

#### Defined in

main.ts:159962

***

### resource\_errors?

> `optional` **resource\_errors**: [`OnPageResourceIssueInfo`](../classes/OnPageResourceIssueInfo.md)

resource errors and warnings

#### Defined in

main.ts:160006

***

### server?

> `optional` **server**: `string`

server version

#### Defined in

main.ts:160001

***

### size?

> `optional` **size**: `number`

resource size
indicates the size of a given resource measured in bytes

#### Defined in

main.ts:159972

***

### status\_code?

> `optional` **status\_code**: `number`

status code of the page where a given resource is located

#### Defined in

main.ts:159964

***

### total\_transfer\_size?

> `optional` **total\_transfer\_size**: `number`

compressed resource size
indicates the compressed size of a given resource in bytes

#### Defined in

main.ts:159978

***

### url?

> `optional` **url**: `string`

resource URL

#### Defined in

main.ts:159969

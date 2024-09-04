[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IImageLinkElementItem

# Interface: IImageLinkElementItem

## Extends

- [`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### direction?

> `optional` **direction**: `string`

direction of the link
possible values: internal, external

#### Defined in

main.ts:161895

***

### dofollow?

> `optional` **dofollow**: `boolean`

indicates whether the link is dofollow
if the value is true, the link doesn’t have a rel="nofollow" attribute

#### Defined in

main.ts:161888

***

### domain\_from?

> `optional` **domain\_from**: `string`

referring domain
the link was found on this domain

#### Defined in

main.ts:161865

***

### domain\_to?

> `optional` **domain\_to**: `string`

referenced domain
the link is pointing to this domain

#### Defined in

main.ts:161868

***

### image\_alt?

> `optional` **image\_alt**: `string`

alternative text for the image

#### Defined in

main.ts:161902

***

### image\_src?

> `optional` **image\_src**: `string`

url of the image

#### Defined in

main.ts:161904

***

### is\_broken?

> `optional` **is\_broken**: `boolean`

link is broken
indicates whether a link is directing to a broken page or resource

#### Defined in

main.ts:161898

***

### is\_link\_relation\_conflict?

> `optional` **is\_link\_relation\_conflict**: `boolean`

indicates that the link may have a conflict with another link
if true, at least one link pointing to link_to has a rel="nofollow" attribute and at least one is dofollow

#### Defined in

main.ts:161907

***

### link\_attribute?

> `optional` **link\_attribute**: `string`[]

link attribute added to external link
indicates link attributes added to the link_to on the page_from
example:
["ugc","noopener"]

#### Defined in

main.ts:161885

***

### link\_from?

> `optional` **link\_from**: `string`

referring page
absolute URL of the page on which the link was found

#### Defined in

main.ts:161877

***

### link\_to?

> `optional` **link\_to**: `string`

referenced page
absolute URL of the page to which the link is pointing

#### Defined in

main.ts:161880

***

### page\_from?

> `optional` **page\_from**: `string`

referring page
relative URL of the page on which the link was found

#### Defined in

main.ts:161871

***

### page\_from\_scheme?

> `optional` **page\_from\_scheme**: `string`

url scheme of the referring page

#### Defined in

main.ts:161890

***

### page\_to?

> `optional` **page\_to**: `string`

referenced page
relative URL of the page to which the link is pointing

#### Defined in

main.ts:161874

***

### page\_to\_scheme?

> `optional` **page\_to\_scheme**: `string`

url scheme of the referenced page

#### Defined in

main.ts:161892

***

### page\_to\_status\_code?

> `optional` **page\_to\_status\_code**: `number`

status code of the referenced page
status code of the page to which the link is pointing

#### Defined in

main.ts:161910

***

### text?

> `optional` **text**: `string`

anchor text

#### Defined in

main.ts:161900

[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IRedirectLinkElementItem

# Interface: IRedirectLinkElementItem

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

main.ts:162375

***

### dofollow?

> `optional` **dofollow**: `boolean`

indicates whether the link is dofollow
if the value is true, the link doesn’t have a rel="nofollow" attribute

#### Defined in

main.ts:162368

***

### domain\_from?

> `optional` **domain\_from**: `string`

referring domain
the link was found on this domain

#### Defined in

main.ts:162350

***

### domain\_to?

> `optional` **domain\_to**: `string`

referenced domain
the link is pointing to this domain

#### Defined in

main.ts:162353

***

### is\_broken?

> `optional` **is\_broken**: `boolean`

link is broken
indicates whether a link is directing to a broken page or resource

#### Defined in

main.ts:162378

***

### is\_link\_relation\_conflict?

> `optional` **is\_link\_relation\_conflict**: `boolean`

indicates that the link may have a conflict with another link
if true, at least one link pointing to the URL in link_to has a rel="nofollow" attribute and at least one is dofollow

#### Defined in

main.ts:162381

***

### link\_from?

> `optional` **link\_from**: `string`

referring page
absolute URL of the page on which the link was found

#### Defined in

main.ts:162362

***

### link\_to?

> `optional` **link\_to**: `string`

referenced page
absolute URL of the page to which the link is pointing

#### Defined in

main.ts:162365

***

### page\_from?

> `optional` **page\_from**: `string`

referring page
relative URL of the page on which the link was found

#### Defined in

main.ts:162356

***

### page\_from\_scheme?

> `optional` **page\_from\_scheme**: `string`

url scheme of the referring page

#### Defined in

main.ts:162370

***

### page\_to?

> `optional` **page\_to**: `string`

referenced page
relative URL of the page to which the link is pointing

#### Defined in

main.ts:162359

***

### page\_to\_scheme?

> `optional` **page\_to\_scheme**: `string`

url scheme of the referenced page

#### Defined in

main.ts:162372

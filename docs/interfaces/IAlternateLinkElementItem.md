**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAlternateLinkElementItem

# Interface: IAlternateLinkElementItem

## Extends

- [`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### direction?

> **`optional`** **direction**: `string`

direction of the link
possible values: internal, external

#### Source

main.ts:157096

***

### dofollow?

> **`optional`** **dofollow**: `boolean`

indicates whether the link is dofollow
if the value is true, the link doesn’t have a rel="nofollow" attribute

#### Source

main.ts:157089

***

### domain\_from?

> **`optional`** **domain\_from**: `string`

referring domain
the link was found on this domain

#### Source

main.ts:157071

***

### domain\_to?

> **`optional`** **domain\_to**: `string`

referenced domain
the link is pointing to this domain

#### Source

main.ts:157074

***

### is\_broken?

> **`optional`** **is\_broken**: `boolean`

link is broken
indicates whether a link is directing to a broken page or resource

#### Source

main.ts:157099

***

### is\_link\_relation\_conflict?

> **`optional`** **is\_link\_relation\_conflict**: `boolean`

indicates that the link may have a conflict with another link
if true, at least one link pointing to link_to has a rel="nofollow" attribute and at least one is dofollow

#### Source

main.ts:157102

***

### link\_from?

> **`optional`** **link\_from**: `string`

referring page
absolute URL of the page on which the link was found

#### Source

main.ts:157083

***

### link\_to?

> **`optional`** **link\_to**: `string`

referenced page
absolute URL of the page to which the link is pointing

#### Source

main.ts:157086

***

### page\_from?

> **`optional`** **page\_from**: `string`

referring page
relative URL of the page on which the link was found

#### Source

main.ts:157077

***

### page\_from\_scheme?

> **`optional`** **page\_from\_scheme**: `string`

url scheme of the referring page

#### Source

main.ts:157091

***

### page\_to?

> **`optional`** **page\_to**: `string`

referenced page
relative URL of the page to which the link is pointing

#### Source

main.ts:157080

***

### page\_to\_scheme?

> **`optional`** **page\_to\_scheme**: `string`

url scheme of the referenced page

#### Source

main.ts:157093

***

### page\_to\_status\_code?

> **`optional`** **page\_to\_status\_code**: `number`

status code of the referenced page
status code of the page to which the link is pointing

#### Source

main.ts:157105

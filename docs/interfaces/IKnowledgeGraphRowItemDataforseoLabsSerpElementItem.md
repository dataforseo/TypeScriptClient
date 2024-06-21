**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IKnowledgeGraphRowItemDataforseoLabsSerpElementItem

# Interface: IKnowledgeGraphRowItemDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### data\_attrid?

> **`optional`** **data\_attrid**: `string`

google defined data attribute ID
example:
action:listen_artist

#### Source

main.ts:96149

***

### links?

> **`optional`** **links**: [`LinkElement`](../classes/LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Source

main.ts:96155

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:96141

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:96137

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:96134

***

### text?

> **`optional`** **text**: `string`

row content

#### Source

main.ts:96151

***

### title?

> **`optional`** **title**: `string`

title of the link

#### Source

main.ts:96145

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:96143

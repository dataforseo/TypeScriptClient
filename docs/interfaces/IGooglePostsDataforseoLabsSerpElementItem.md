[dataforseo-client](../README.md) / [Exports](../modules.md) / IGooglePostsDataforseoLabsSerpElementItem

# Interface: IGooglePostsDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IGooglePostsDataforseoLabsSerpElementItem`**

## Implemented by

- [`GooglePostsDataforseoLabsSerpElementItem`](../classes/GooglePostsDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [cid](IGooglePostsDataforseoLabsSerpElementItem.md#cid)
- [feature](IGooglePostsDataforseoLabsSerpElementItem.md#feature)
- [position](IGooglePostsDataforseoLabsSerpElementItem.md#position)
- [posts\_id](IGooglePostsDataforseoLabsSerpElementItem.md#posts_id)
- [rank\_absolute](IGooglePostsDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IGooglePostsDataforseoLabsSerpElementItem.md#rank_group)
- [xpath](IGooglePostsDataforseoLabsSerpElementItem.md#xpath)

## Properties

### cid

• `Optional` **cid**: `string`

google-defined client id

#### Defined in

[main.ts:94446](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94446)

___

### feature

• `Optional` **feature**: `string`

the additional feature of the review

#### Defined in

[main.ts:94444](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94444)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:94438](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94438)

___

### posts\_id

• `Optional` **posts\_id**: `string`

the identifier of the google_posts feature

#### Defined in

[main.ts:94442](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94442)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:94434](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94434)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:94431](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94431)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:94440](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94440)

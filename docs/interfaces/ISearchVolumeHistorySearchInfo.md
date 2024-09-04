[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ISearchVolumeHistorySearchInfo

# Interface: ISearchVolumeHistorySearchInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### desktop?

> `optional` **desktop**: [`SearchVolumeHistoryItemInfo`](../classes/SearchVolumeHistoryItemInfo.md)[]

device type = desktop
contains historical search volume data for searches made from desktop devices

#### Defined in

main.ts:134780

***

### mobile?

> `optional` **mobile**: [`SearchVolumeHistoryItemInfo`](../classes/SearchVolumeHistoryItemInfo.md)[]

device type = mobile
contains historical search volume data for searches made from mobile devices

#### Defined in

main.ts:134786

***

### non\_smartphones?

> `optional` **non\_smartphones**: [`SearchVolumeHistoryItemInfo`](../classes/SearchVolumeHistoryItemInfo.md)[]

device type = non-smartphones
contains historical search volume data for searches made from feature phones (non-smartphone mobile devices)

#### Defined in

main.ts:134783

***

### tablet?

> `optional` **tablet**: [`SearchVolumeHistoryItemInfo`](../classes/SearchVolumeHistoryItemInfo.md)[]

device type = tablet
contains historical search volume data for searches made from tablets

#### Defined in

main.ts:134789

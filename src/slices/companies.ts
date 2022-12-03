import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import companies from '../data/companies.json'
import Company from '../interfaces/Company'
import generateId from '../helpers/generateId'

interface CompaniesState {
  data: Company[]
}

const initialState: CompaniesState = {
  data: companies as Company[],
}

export const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    addCompany: (state, action: PayloadAction<Omit<Company, 'id'>>) => {
      state.data.push({
        ...action.payload,
        id: generateId()
      })
    },
  },
})

export const { addCompany } = companiesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default companiesSlice.reducer

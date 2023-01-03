// export const myGetter = (state) => {
// return state
// }

export const getEntriesByTerm =
  (state) =>
  (term = "") => {
    if (!term.length) return state.entries;
    return state.entries.filter((item) =>
      item.text.toLowerCase().includes(term.toLocaleLowerCase())
    );
  };

export const getEntryById =
  (state) =>
  (id = "") => {
    const entry = state.entries.find((item) => item.id === id);
    if (!entry) return;
    return { ...entry };
  };

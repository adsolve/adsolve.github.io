"""
Helper app to visualise team information.
"""
import streamlit as st

st.set_page_config(layout="wide")

import yaml
import os
import math
import streamlit as st


with open("_data/people.yml") as stream:
    try:
        team_data = yaml.safe_load(stream)
    except yaml.YAMLError as exc:
        print(exc)

num_cols = 6


st.markdown(
    """
<style>

    div[data-testid="stHorizontalBlock"] {
        display: flex !important;
    }

    div[data-testid="column"] {
        flex: 1 !important; /* additionally, equal width */
        padding: .25em !important;
        /*border: solid !important;*/
        /*border-radius: 10px !important;*/
        /*border-color: grey !important;*/
    }

    .l-font {
        font-size:18px !important;
        font-weight: bolder;
        margin:0;
    }
    .s-font {
        font-size:16px !important;
    }
</style>
""",
    unsafe_allow_html=True,
)

col1, _ = st.columns([0.1, 0.9])
with col1:
    with col1:
        st.radio(
            "Select team category to render:",
            key="team_category",
            options=["pi_coi", "research_staff", "programme_manager"],
            index=0,
        )

curr_data = team_data[st.session_state.team_category]
curr_data_rows = [
    curr_data[i : i + num_cols] for i in range(0, len(curr_data), num_cols)
]
num_curr_rows = math.ceil(len(curr_data) / num_cols)

for row in range(num_curr_rows):
    curr_data = curr_data_rows[row]

    for i, col in enumerate(st.columns(max(len(curr_data), num_cols))):
        with col:
            with st.container(border=False):
                if i >= len(curr_data):
                    continue
                p = curr_data[i]
                st.image(
                    os.path.join("assets", "img", "team", p["image_filename"]),
                    use_column_width="always",
                )
                desc = f"""<p class="l-font"> {p["name"]} </p> <p class="s-font">"""
                if p["desc"]:
                    desc += f'{p["desc"]} <br> {p["institution"]}'
                else:
                    desc += p["institution"]
                desc += "</p>"

                st.markdown(
                    desc,
                    unsafe_allow_html=True,
                )

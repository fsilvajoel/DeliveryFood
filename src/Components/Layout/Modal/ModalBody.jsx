import React, { useState } from 'react'
const body = (props) => {
  // const { actived } = props
  // const classes = useStyles();
  return (
    <>
      <div className="modal-content">
        <div class="modal-header modal-add" style="background-image: url(/static/images/hashi.jpg)">
          <h4 class="modal-title" style="color: white;line-height: 4.5;margin-bottom: 45px;">Combo Iniciante</h4>
          <button type="button" class="close modal-close-button" data-dismiss="modal">×</button>
        </div>
        <div class="modal-body">
          <form id="form340" method="post" class="form">
            <input type="hidden" name="csrfmiddlewaretoken" value="cu7WLNi2xOcEoFp39uKynreUul4KUlnDXSS936Vu4Vhz1pagasrPlVRtMPkE1prN" />
            <input type="hidden" name="product_id" value="340" />
            <input type="hidden" name="add" value="True" />
            <p>8 hots filadélfia, 4 hots pokemon, 4 hots holl 16 peças</p>
            <input name="tamanho" type="hidden" value="1" />
            <input type="button" class="btn btn-su'ccess" style="border-radius: 0; width: 200px" data-dismiss="modal" onclick="updatecart('#form340')" value="Adicionar" />
          </form>
        </div>
      </div>
    </>

  );
}
export default body;